describe(`GET /api/folders`, () => {
    context(`Given no folders`, () => {
        it(`responds with 200 and an empty list`, () => {
            return supertest(app)
                .get('/api/articles')

       it('responds with 200 and all of the folders', () => {
            return supertest(app)
                .get('/api/folders')

       it('removes XSS attack content', () => {
            return supertest(app)
            .get(`/api/folders`)

describe(`GET /api/folders/:folder_id`, () => {
    it(`responds with 404`, () => {
        const articleId = 123456
        return supertest(app)
            .get(`/api/folders/${folderId}`)

         const folderId = 2
         const expectedFolder = testFolders[folderId - 1]
         return supertest(app)
            .get(`/api/articles/${articleId}`)
            .expect(200, expectedArticle)

    it('removes XSS attack content', () => {
        return supertest(app)
            .get(`/api/articles/${maliciousArticle.id}`)

describe(`POST /api/articles`, () => {
   return supertest(app)
        .post('/api/articles')
        expect(res.headers.location).to.eql(`/api/articles/${res.body.id}`)

         .then(res =>
           supertest(app)
           .get(`/api/articles/${res.body.id}`)

         delete newArticle[field]
         return supertest(app)
         .post('/api/articles')

     it('removes XSS attack content from response', () => {
       const { maliciousArticle, expectedArticle } = makeMaliciousArticle()
       return supertest(app)

       .post(`/api/articles`)


       describe(`DELETE /api/articles/:article_id`, () => {
        context(`Given no articles`, () => {
          it(`responds with 404`, () => {
            const articleId = 123456
            return supertest(app)
            .delete(`/api/articles/${articleId}`)
           .expect(404, { error: { message: `Article doesn't exist` } })
       })
     })

         const expectedArticles = testArticles.filter(article => article.id !== idToRemove)
         return supertest(app)
         .delete(`/api/articles/${idToRemove}`)
           .expect(204)
           .then(res =>
             supertest(app)
             .get(`/api/articles`)