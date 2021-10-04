export default function makeDeleteDevice({ removeDevice }) {
    return async function deleteDevice (body) {
        try {
            const { id } = body;
            console.log('id: ', id)
            const deviceInfo = {
                id
            }
            const removed = await removeDevice(deviceInfo);
            return {
                headers: {
                    'Content-Type': 'application/json',
                },
                statusCode: 204,
                body: { removed }
            }
        } catch (error) {
            console.log('Remove device error', error);
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