import { fireEvent, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { MemoryRouter, Route, Routes } from 'react-router-dom'
import CatalogPage from '../../../pages/CatalogPages/CatalogPage'




describe('Catalog input', () => {
  test('input value', () => {
    render(
      <MemoryRouter initialEntries={['/catalog']}>
        <Routes>
          <Route path="/" element={<CatalogPage />} />
          <Route path="/catalog" element={<CatalogPage />} />
        </Routes>
      </MemoryRouter>
    )
   const input = screen.getByTestId('input')
   expect(input).toContainHTML('')
   fireEvent.input(input, {
    target : {value : "Привет"}
   })
   expect(screen.getByTestId('input')).toContainHTML('привет')
  })

  test('input toLowerCase', () => {
    render(
      <MemoryRouter initialEntries={['/catalog']}>
        <Routes>
          <Route path="/" element={<CatalogPage />} />
          <Route path="/catalog" element={<CatalogPage />} />
        </Routes>
      </MemoryRouter>
    )
   const input = screen.getByTestId('input')
   expect(input).toContainHTML('')
   fireEvent.input(input, {
    target : {value : "ПРИВЕТ"}
   })
   expect(screen.getByTestId('input')).toContainHTML('привет')
  })
})
