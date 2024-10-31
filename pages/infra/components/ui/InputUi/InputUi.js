import React from 'react';

export default function InputUi({ isRaining, placeholder = '', fetchWeather }) {
  const styles = {
    input: {
      padding: '10px',
      fontSize: '1rem',
      borderRadius: '5px',
      border: '1px solid #ddd',
      width: '200px',
      marginBottom: '20px',
      backgroundColor: isRaining ? 'green' : 'white',
      borderColor: isRaining ? 'green' : 'white',
    },
  }

  return (
    <input
      type="text"
      placeholder={placeholder}
      onChange={(e) => { fetchWeather(e, e.target.value) }}
      style={styles.input}
    />
  )
}
