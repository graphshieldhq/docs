/**
 * Azure Text Analytics (ATA) helper
 * Relies on the Azure Text Analytics service
 * Supported languages: https://docs.microsoft.com/en-us/azure/cognitive-services/text-analytics/language-support
 */

// #region DECLARATIONS
// External dependencies
const https = require('https')
const hash = require('object-hash')
const config = require('config')
// Internal dependencies
const cache = require('./cacheHelper.js.js.js').textAnalyticsCache()
// Variables
const ATA_SUBSCRIPTION_KEY = "6f7df143230440718ba17ad4f994e1d9"
const ATA_HOSTNAME = 'westeurope.api.cognitive.microsoft.com'
const ATA_V2_ROOT_PATH = '/text/analytics/v2.1'
const ATA_V3_ROOT_PATH = '/text/analytics/v3.0-preview.1'
const ATA_LANGUAGES_ENDPOINT = ''
const ATA_ENTITIES_ENDPOINT = ''
const ATA_LINKED_ENTITIES_ENDPOINT = ''
const ATA_PII_ENTITIES_ENDPOINT = '/entities/recognition/pii'
const ATA_KEY_PHRASES_ENDPOINT = ''
const ATA_SENTIMENT_ENDPOINT = ''
const ATA_CACHE_TTL = 3600
const MODULE_TAGS = ['textAnalyticsHelper']
// #endregion DECLARATIONS

// #region HELPERS

// #endregion HELPERS

// #region IMPLEMENTATION
const recognizePiiEntities = (documents, recognizePiiEntitiesCallback) => {
  try {
    const requestCacheKey = config.get('environment') + ':' + hash(documents, { algorithm: 'sha1' })
    const cachedRequest = cache.get(requestCacheKey)
    if (cachedRequest) { // request exist in cache
      if (recognizePiiEntitiesCallback) { recognizePiiEntitiesCallback(null, JSON.parse(cachedRequest)) }
    } else { // Request doesn't exist in cache
      let requestBody = JSON.stringify(documents)
      let requestParams = {
        method: 'POST',
        hostname: ATA_HOSTNAME,
        path: ATA_V3_ROOT_PATH + ATA_PII_ENTITIES_ENDPOINT,
        headers: {
          'Ocp-Apim-Subscription-Key': ATA_SUBSCRIPTION_KEY
        }
      }
      // Execute and process request
      let req = https.request(requestParams, (response) => {
        let bodyData = ''
        response.on('data', (data) => {
          bodyData += data
        })
        response.on('end', () => {
          let responseBody = JSON.parse(bodyData)
          if (!Object.prototype.hasOwnProperty.call(responseBody, 'error')) {
            if (recognizePiiEntitiesCallback) { recognizePiiEntitiesCallback(null, responseBody) }
            // Store result to cache
            cache.set(requestCacheKey, bodyData, ATA_CACHE_TTL)
          } else { // An error occured
            if (recognizePiiEntitiesCallback) { recognizePiiEntitiesCallback(responseBody.error, null) }
          }
        })
        response.on('error', (err) => {
          log.error('Error in /textAnalyticsHelper/recognizePiiEntities.', MODULE_TAGS, err)
          if (recognizePiiEntitiesCallback) { recognizePiiEntitiesCallback(err, null) }
        })
      })
      req.write(requestBody)
      req.end()
    }
  } catch (err) { // Unexpected error
    log.error('Unexpected error in /textAnalyticsHelper/recognizePiiEntities.', MODULE_TAGS, err)
    if (recognizePiiEntitiesCallback) { recognizePiiEntitiesCallback(err, null) }
  }
}
// #endregion IMPLEMENTATION

// #region BETA
const extractKeyPhrases = () => { }
const analyzeSentiment = () => { }
const detectLanguages = () => { }
const recognizeEntities = () => { }
const recognizeLinkedEntities = () => { }
exports.detectLanguages = detectLanguages
exports.recognizeEntities = recognizeEntities
exports.recognizeLinkedEntities = recognizeLinkedEntities
exports.extractKeyPhrases = extractKeyPhrases
exports.analyzeSentiment = analyzeSentiment
// #endregion BETA

// #region EXPORTS
exports.recognizePiiEntities = recognizePiiEntities
// #endregion EXPORTS
