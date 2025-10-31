

export const saveCount = async (count) => {
  if (count <= 0) {
    alert('Count must be greater than zero to save');
    return;
  }
  try {
    const response = await fetch('http://localhost:3000/api/save', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({ count })
    });
    return response;
  } catch (error) {
    console.error('Error:', error);
    alert('Error saving count');
  }
};

export const fetchHistory = async () => {
    const response = await fetch('http://localhost:3000/api/history');
    if (response.ok) {
        const data = await response.json();
        return data;
    } else {
        throw new Error('Failed to fetch history');
    }
}

export const deleteCount = async (id) => {
    const response = await fetch(`http://localhost:3000/api/delete/${id}`, {
        method: 'DELETE'
    });
    return response;
}