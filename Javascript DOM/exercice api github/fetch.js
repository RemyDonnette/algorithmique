export async function fetchData({url, method, data}) {
    const result = await fetch(`${url}`, {
        method: method || 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: data ? JSON.stringify(data) : data,
    });

    if (result.ok) {
        return result.json();
    } 
    throw new Error('Erreur request')
}

