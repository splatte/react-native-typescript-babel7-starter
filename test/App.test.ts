import App from '../src/App'

describe('App', () => {
    it('simple truth', () => {
        expect(1).toBe(1)
    })

    it('can import from react native', () => {
        expect(App).toBeDefined()
    })
})
