import api from './api'

export default {
    all: () => api.get('/employees'),
    create: (credentials) => api.post('/employees', credentials),
    delete: (id) => api.delete(`/employees/${id}`)
}