import { useEffect } from 'react';
import { useNavigate, useResolvedPath } from 'react-router-dom';
import PropTypes from 'prop-types';
import { EXERCISES_CATEGORY } from '../../../utils/constants';
import {
  CategoriesFieldset,
  CategoryDiv,
  CategoryLabel,
  CategoryInput,
} from './ExercisesCategories.styled';

export default function ExercisesCategories({ category, setCategory }) {
  const path = useResolvedPath();
  const navigate = useNavigate();

  //we use it to set up the path
  useEffect(() => {
    if (path.pathname !== '/exercises') {
      navigate('./');
    }
  }, [category]);

  //to check input value
  const handleOptionChange = event => {
    setCategory(event.target.value);
  };

  return (
    <CategoriesFieldset>
      <CategoryDiv>
        <CategoryLabel selected={category === EXERCISES_CATEGORY.BODY_PARTS}>
          <CategoryInput
            type="radio"
            value={EXERCISES_CATEGORY.BODY_PARTS}
            checked={category === EXERCISES_CATEGORY.BODY_PARTS}
            onChange={handleOptionChange}
          />
          Body parts
        </CategoryLabel>
      </CategoryDiv>
      <CategoryDiv>
        <CategoryLabel selected={category === EXERCISES_CATEGORY.MUSCLES}>
          <CategoryInput
            type="radio"
            value={EXERCISES_CATEGORY.MUSCLES}
            checked={category === EXERCISES_CATEGORY.MUSCLES}
            onChange={handleOptionChange}
          />
          Muscles
        </CategoryLabel>
      </CategoryDiv>
      <CategoryDiv>
        <CategoryLabel selected={category === EXERCISES_CATEGORY.EQUIPMENT}>
          <CategoryInput
            type="radio"
            value={EXERCISES_CATEGORY.EQUIPMENT}
            checked={category === EXERCISES_CATEGORY.EQUIPMENT}
            onChange={handleOptionChange}
          />
          Equipment
        </CategoryLabel>
      </CategoryDiv>
    </CategoriesFieldset>
  );
}

ExercisesCategories.propTypes = {
  category: PropTypes.string.isRequired,
  setCategory: PropTypes.func.isRequired,
};
