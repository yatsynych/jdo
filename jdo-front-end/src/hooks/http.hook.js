import { useState, useCallback } from 'react'

export const useHttp = () => {

    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const request = useCallback(async (url, method = 'GET', body = null, headers = {}) => {

        setLoading(true)

        if (body) {
            body = JSON.stringify(body)
            headers['Content-Type'] = 'application/json'
        }

        try {
           const response = await fetch(url, {method, body, headers})
           const data = await response.json()

           if (response.ok === false) {
               setError(data.message)
               throw new Error(data.message || 'Http response error')
           }

           setLoading(false)

           return data

        } catch (e) {
            setLoading(false)
            setError(e.message)
            //throw e
        }

    }, []);

    const clearError = () => setError(null)


    return { loading, request, error, clearError }

}