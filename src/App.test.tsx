import {render , screen} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect';
import App from './App'
import { MemoryRouter, Route, Routes } from 'react-router-dom'


test('App test', () => {
    render(
    <MemoryRouter>
   <Routes>
      <Route path="*" element={<App />}></Route>
    </Routes>
    </MemoryRouter>)
    const linkElement = screen.getByText('Главная')
    expect(linkElement).toBeInTheDocument()
})