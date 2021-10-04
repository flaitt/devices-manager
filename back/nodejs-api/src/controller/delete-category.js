export default function makeDeleteCategory({ removeCategory }) {
    return async function deleteCategory (body) {
        try {
            const { id } = body;
            const categoryInfo = {
                id
            }
            const removed = await removeCategory(categoryInfo);
            return {
                headers: {
                    'Content-Type': 'application/json',
                },
                statusCode: 204,
                body: { removed }
            }
        } catch (error) {
            console.log('Remove category error', error);
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