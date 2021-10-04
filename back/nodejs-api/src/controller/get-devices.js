export default function makeGetDevices({ findDevices }) {
    return async function getDevices () {
        try {
            const devices = await findDevices();
            return {
                headers: {
                    'Content-Type': 'application/json',
                },
                statusCode: 200,
                body: { devices }
            }
        } catch (error) {
            console.log('Get devices error', error);
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