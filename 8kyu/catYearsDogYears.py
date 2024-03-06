def human_years_cat_years_dog_years(human_years):
    # Your code here

    cat_years = 0
    dog_years = 0
    current_year = 0

    while current_year < human_years:
        if current_year == 0:
            cat_years += 15
            dog_years += 15
        elif current_year == 1:
            cat_years += 9
            dog_years += 9
        else:
            cat_years += 4
            dog_years += 5

        current_year += 1

    return [human_years, cat_years, dog_years]
