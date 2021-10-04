export default function makeGetCategories({ findCategories }) {
    return async function getCategories() {
        try {
            const categories = await findCategories();
            return {
                headers: {
                    'Content-Type': 'application/json',
                },
                statusCode: 200,
                body: { categories }
            }
        } catch (error) {
            console.log('Get categories error', error);
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