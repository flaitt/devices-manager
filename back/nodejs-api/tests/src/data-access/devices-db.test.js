import makeDeviceManagerDb from '../../../src/data-access/devices-db'


describe('find all devices', () => {
    const makeDb = jest.fn().mockImplementation( () => new Promise((resolve, reject) => {
        resolve({
            query: jest.fn().mockImplementation(() =>
                new Promise((resolve, reject) => {
                    resolve(JSON.parse(`[
                        {
                            \"id\": 4,
                            \"category_id\": \"1 nodejs\",
                            \"color\": \"color nodejs\",
                            \"part_number\": 99999
                        }
                    ]`))
                })
            )
        })
    }))
    it('should find all device', async () => {
        const result = await makeDeviceManagerDb({ makeDb }).findAllDevices()
        expect(result).toEqual(
            {
              id: 4,
              category_id: '1 nodejs',
              color: 'color nodejs',
              part_number: 99999
            }
        )
    });
});

describe('find all categories', () => {
    const makeDb = jest.fn().mockImplementation( () => new Promise((resolve, reject) => {
        resolve({
            query: jest.fn().mockImplementation(() =>
                new Promise((resolve, reject) => {
                    resolve(JSON.parse(`[
                        {
                            \"id\": 4,
                            \"name\": \"1 nodejs\"
                        }
                    ]`))
                })
            )
        })
    }))
    it('should find all category', async () => {
        const result = await makeDeviceManagerDb({ makeDb }).findAllCategories()
        expect(result).toEqual(
            {
              id: 4,
              name: '1 nodejs'
            }
        )
    });
});

describe('insert devices', () => {
    const makeDb = jest.fn().mockImplementation( () => new Promise((resolve, reject) => {
        resolve({
            query: jest.fn().mockImplementation(() =>
                new Promise((resolve, reject) => {
                    resolve(JSON.parse(`
                        {
                            \"status\": 200
                        }
                    `))
                })
            )
        })
    }))
    it('should insert device', async () => {
        const result = await makeDeviceManagerDb({ makeDb }).insertDevice("categoryId", "color", 1234)
        expect(result).toEqual(
            {
              status: 200,
            }
        )
    });
});

describe('insert categories', () => {
    const makeDb = jest.fn().mockImplementation( () => new Promise((resolve, reject) => {
        resolve({
            query: jest.fn().mockImplementation(() =>
                new Promise((resolve, reject) => {
                    resolve(JSON.parse(`
                        {
                            \"status\": 200
                        }
                    `))
                })
            )
        })
    }))
    it('should insert category', async () => {
        const result = await makeDeviceManagerDb({ makeDb }).insertCategory("categoryName")
        expect(result).toEqual(
            {
              status: 200,
            }
        )
    });
});

describe('delete devices', () => {
    const makeDb = jest.fn().mockImplementation( () => new Promise((resolve, reject) => {
        resolve({
            query: jest.fn().mockImplementation(() =>
                new Promise((resolve, reject) => {
                    resolve(JSON.parse(`
                        {
                            \"status\": 204
                        }
                    `))
                })
            )
        })
    }))
    it('should delete device', async () => {
        const result = await makeDeviceManagerDb({ makeDb }).removeDeviceById(1)
        expect(result).toEqual(
            {
              status: 204,
            }
        )
    });
});

describe('delete categories', () => {
    const makeDb = jest.fn().mockImplementation( () => new Promise((resolve, reject) => {
        resolve({
            query: jest.fn().mockImplementation(() =>
                new Promise((resolve, reject) => {
                    resolve(JSON.parse(`
                        {
                            \"status\": 204
                        }
                    `))
                })
            )
        })
    }))
    it('should delete device', async () => {
        const result = await makeDeviceManagerDb({ makeDb }).removeCategoryById(1)
        expect(result).toEqual(
            {
              status: 204,
            }
        )
    });
});