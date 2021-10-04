export default function makePostDevice({ addDevice }) {
    return async function postDevice (body) {
        try {
            const { color, categoryId, partNumber } = body;
            const deviceInfo = {
                color,
                categoryId,
                partNumber
            }
            const posted = await addDevice(deviceInfo);
            return {
                headers: {
                    'Content-Type': 'application/json',
                },
                statusCode: 201,
                body: { posted }
            }
        } catch (error) {
            console.log('Erro ao realizar post', error);
            return {
                headers: {
                  'Content-Type': 'application/json'
                },
                statusCode: 400,
                body: {
                  error: error.message
                }
              }
        }
    }
}