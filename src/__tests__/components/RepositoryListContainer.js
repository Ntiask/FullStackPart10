import { RepositoryListContainer } from '../../../components/RepositoryListContainer'
import { render } from '@testing-library/react-native';

const initialvalues =
    {"repositories":
        {"edges":
            [{"node":
                {
                "fullName":"jaredpalmer/formik",
                "ratingAverage":90,
                "reviewCount":5,
                "stargazersCount":30961,
                "url":"https://github.com/jaredpalmer/formik",
                "ownerAvatarUrl":"https://avatars.githubusercontent.com/u/4060187?v=4",
                "description":"Build forms in React, without the tears 😭 ",
                "language":"TypeScript",
                "forksCount":2577,
                "__typename": "Repository"
                }},
]}}



describe('test', () => {
    it('renders all needed elements', () => {
      const { debug, getByText } = render(<RepositoryListContainer data={initialvalues}/>);
  
      debug();
  
      expect(getByText('Stars')).toBeDefined();
        expect(getByText('30961')).toBeDefined();
      expect(getByText('Forks')).toBeDefined();
        expect(getByText('2577')).toBeDefined();
      expect(getByText('Reviews')).toBeDefined();
        expect(getByText('5')).toBeDefined();
      expect(getByText('Ratings')).toBeDefined();
        expect(getByText('90')).toBeDefined();
      expect(getByText('TypeScript')).toBeDefined();
      expect(getByText('jaredpalmer/formik')).toBeDefined();
      expect(getByText('Build forms in React, without the tears 😭')).toBeDefined();
    });
  });