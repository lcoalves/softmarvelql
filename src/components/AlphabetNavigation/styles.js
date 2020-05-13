import styled from 'styled-components';

import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

export const Container = styled(Pagination)`
  margin-top: 40px;

  ul {
    display: flex;
    list-style: none;
    flex-wrap: wrap;
  }
`;

export const NavItem = styled(PaginationItem)`
  flex: 1;
  padding: 10px;
  background: #e6e6eb;
  cursor: pointer;
  border-radius: 5px;
  margin-top: 4px;

  @media (max-width: 1024px) {
    width: 27px;
  }

  & + li {
    margin-left: 4px;
  }

  a {
    color: #3a3a3a;
    text-decoration: none;
  }

  &:hover {
    background: #3a3a3a;

    a {
      color: #e6e6eb;
    }
  }

  &.active {
    background: #3a3a3a;

    a {
      color: #e6e6eb;
    }
  }
`;

export const NavLink = styled(PaginationLink)`
  font-weight: 700;
`;
