export function createDate() {
    const date = new Date()

    const options = {
        year: 'numeric',
        month: 'long',
        day: '2-digit'
    }

    return date.toLocaleDateString('es-ES', options)
}

export function formatDate(date) {
    const newDate = new Date(date)

    const options = {
        year: 'numeric',
        month: 'long',
        day: '2-digit'
    }

    return newDate.toLocaleDateString('es-ES', options)
}

export function generateId() {
    return Math.random().toString(32).split('.')[1]
}