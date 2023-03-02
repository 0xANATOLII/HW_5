package shop.mapper;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import shop.dto.category.CategoryItemDTO;
import shop.dto.category.CreateCategoryDTO;
import shop.entities.CategoryEntity;

import java.util.List;

@Mapper(componentModel = "spring")
public interface CategoryMapper {
    @Mapping(source = "description", target = "description")
    CategoryItemDTO CategoryItemDTOByCategory(CategoryEntity category);
    List<CategoryItemDTO> CategoryItemDTOsByCategories(List<CategoryEntity> list);

    @Mapping(target = "image", ignore = true)
    CategoryEntity CategoryByCreateCategoryDTO(CreateCategoryDTO dto);
}
