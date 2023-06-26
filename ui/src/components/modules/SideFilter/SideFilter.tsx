"use client";

import { Input, Select } from "@/components/common";

import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { setCinema, setGenre, setTitle } from "@/redux/features/filters";
import { useGetCinemasQuery } from "@/redux/services/movieApi";

import styles from "./SideFilter.module.scss";

export function SideFilter() {
  const dispatch = useAppDispatch();
  const { title } = useAppSelector((state) => state.filters);

  const { data } = useGetCinemasQuery();

  return (
    <div className={styles.container}>
      <h4>Фильтр поиска</h4>

      <form className="">
        <div className={styles["input-group"]}>
          <label htmlFor="title">Название</label>
          <Input
            type="text"
            id="title"
            name="title"
            placeholder="Введите название"
            value={title}
            onChange={(e) => dispatch(setTitle(e.target.value))}
          />
        </div>
        <div className={styles["input-group"]}>
          <label>Жанр</label>
          <Select
            placeholder="Выберите жанр"
            onChange={(value) => dispatch(setGenre(value))}
          >
            <Select.Option value={null} label="Не выбран" />
            <Select.Option value="action" label="Боевик" />
            <Select.Option value="comedy" label="Комедия" />
            <Select.Option value="fantasy" label="Фэнтези" />
            <Select.Option value="horror" label="Ужасы" />
          </Select>
        </div>
        <div className={styles["input-group"]}>
          <label>Кинотеатр</label>
          <Select
            placeholder="Выберите кинотеатр"
            onChange={(value) => dispatch(setCinema(value))}
          >
            <Select.Option value={null} label="Не выбран" />

            {data?.map((cinemaData) => (
              <Select.Option
                key={cinemaData.id}
                value={cinemaData.id}
                label={cinemaData.name}
              />
            ))}
          </Select>
        </div>
      </form>
    </div>
  );
}
