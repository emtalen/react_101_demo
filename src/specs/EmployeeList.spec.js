import { render, screen } from '@testing-library/react';
import EmployeeList from '../components/EmployeeList';

const mockedResponse =
{
  "page": 1,
  "per_page": 6,
  "total": 12,
  "total_pages": 2,
  "data":
    [
      { "id": 1, "email": "george.bluth@reqres.in", "first_name": "George", "last_name": "Bluth", "avatar": "https://reqres.in/img/faces/1-image.jpg" },
      { "id": 2, "email": "janet.weaver@reqres.in", "first_name": "Janet", "last_name": "Weaver", "avatar": "https://reqres.in/img/faces/2-image.jpg" },
      { "id": 3, "email": "emma.wong@reqres.in", "first_name": "Emma", "last_name": "Wong", "avatar": "https://reqres.in/img/faces/3-image.jpg" },
      { "id": 4, "email": "eve.holt@reqres.in", "first_name": "Eve", "last_name": "Holt", "avatar": "https://reqres.in/img/faces/4-image.jpg" },
      { "id": 5, "email": "charles.morris@reqres.in", "first_name": "Charles", "last_name": "Morris", "avatar": "https://reqres.in/img/faces/5-image.jpg" },
      { "id": 6, "email": "tracey.ramos@reqres.in", "first_name": "Tracey", "last_name": "Ramos", "avatar": "https://reqres.in/img/faces/6-image.jpg" }],
  "support": { "url": "https://reqres.in/#support-heading", "text": "To keep ReqRes free, contributions towards server costs are appreciated!" }
}
const xhrMock = {
  open: jest.fn(),
  send: jest.fn(),
  setRequestHeader: jest.fn(),
  readyState: 4,
  status: 200,
  responseText: JSON.stringify(mockedResponse)
};

beforeEach(() => {
  jest.spyOn(window, 'XMLHttpRequest').mockImplementation(() => xhrMock);
  render(<EmployeeList />);
  xhrMock.onload()
});

it('calls the API using XHR on render', () => {
  expect(xhrMock.open).toBeCalledWith('GET', 'https://reqres.in/api/users');
  expect(xhrMock.send).toHaveBeenCalledTimes(1);
});
it('renders learn react link', () => {
  const listElement = screen.getByRole('list')
  expect(listElement.children.length).toBe(6);
});