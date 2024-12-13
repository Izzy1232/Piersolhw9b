
document.getElementById('callApi').addEventListener('click', () => {
  fetch('/api/countries', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name: 'Piersol', countries: ['Spain', 'Germany', 'France'] })
  })
    .then(response => response.json())
    .then(data => {
      document.getElementById('output').textContent = data.message
    })
    .catch(error => {
      console.error('Error:', error)
    })
})
