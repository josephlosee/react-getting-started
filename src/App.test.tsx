import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

describe("Home Page", ()=>{
  test('renders learn react link', () => {
    render(<App />);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
  });
  
  test('Has a button', ()=>{
    render(<App/>);
    const button = screen.getByText("+1");
    expect(button).toBeInTheDocument();
  })
  
  test('Pressing the button increments the counter a button', ()=>{
    render(<App/>);
    const button = screen.getByText("+1");
    //button.c
  })

  test('Pressing the +1 button increments the counter a button', ()=>{
    render(<App/>);
    const counter = screen.getByText("0");
    const button = screen.getByText("+1");
    fireEvent.click(button);
    expect(counter.textContent).toBe("1");
  })

  test('Pressing the +5 button increments the counter a button', ()=>{
    render(<App/>);
    const counter = screen.getByText("0");
    const button = screen.getByText("+5");
    fireEvent.click(button);
    expect(counter.textContent).toBe("5");
  })

  test('Pressing the +10 button increments the counter a button', ()=>{
    render(<App/>);
    const counter = screen.getByText("0");
    const button = screen.getByText("+10");
    fireEvent.click(button);
    expect(counter.textContent).toBe("10");
  })

  test('Pressing the +5 button increments the counter a button', ()=>{
    render(<App/>);
    const counter = screen.getByText("0");
    const button = screen.getByText("+100");
    fireEvent.click(button);
    expect(counter.textContent).toBe("100");
  })

  test('Pressing the each button increments the counter a button', ()=>{
    render(<App/>);
    const counter = screen.getByText("0");
    const incrementValues = [1, 5, 10, 100]
    incrementValues.forEach(element => {
      const button = screen.getByText(`+${element}`);
      fireEvent.click(button);
    });
    expect(counter.textContent).toBe("116");
  })
})
