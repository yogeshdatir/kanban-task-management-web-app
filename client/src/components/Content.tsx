import { ContentContainer, EmptyStateContainer } from './Content.styled';
import { PrimaryBtn } from './Header.styled';

const Content = () => {
  return (
    <ContentContainer>
      <EmptyStateContainer>
        <p>This board is empty. Create a new column to get started.</p>
        <PrimaryBtn>+ Add New Task</PrimaryBtn>
      </EmptyStateContainer>
    </ContentContainer>
  );
};

export default Content;
