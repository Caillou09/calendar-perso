
exports.handler = async (event, context) => {
  const faireProut = function prout() {
    return prout = 'test'
  }
  return {
    statusCode: 200,
    body : JSON.stringify({res : faireProut()})
  }
}
