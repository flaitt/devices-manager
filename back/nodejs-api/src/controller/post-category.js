export default function makePostCategory({ addCategory }) {
    return async function postCategory (body) {
        try {
            const { name } = body;
            const categoryInfo = {
                name
            }
            const posted = await addCategory(categoryInfo);
            return {
                headers: {
                    'Content-Type': 'application/json',
                },
                statusCode: 201,
                body: { posted }
            }
        } catch (error) {
            console.log('Post category error', error);
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