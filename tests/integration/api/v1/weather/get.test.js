test(
  'GET to /api/v1/weather',
  async () => {
    const res = await fetch('http://localhost:3000/api/v1/weather?cidade=Brasilia')
    const data = await res.json();
    expect(res.status).toBe(200)
    expect(data.name).toBe('Brasília')
  })
