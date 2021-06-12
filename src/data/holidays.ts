const holidays = [
  {
    name: 'MLK Day 2019',
    date: new Date('2019/01/21'),
  },
  {
    name: 'MLK Day 2020',
    date: new Date('2020/01/20'),
  },
  {
    name: 'MLK Day 2021',
    date: new Date('2021/01/18'),
  },
  {
    name: 'MLK Day 2022',
    date: new Date('2022/01/17'),
  },
  {
    name: 'MLK Day 2023',
    date: new Date('2023/01/16'),
  },
  {
    name: 'MLK Day 2024',
    date: new Date('2024/01/15'),
  },
  {
    name: 'MLK Day 2025',
    date: new Date('2025/01/20'),
  },
  {
    name: 'MLK Day 2026',
    date: new Date('2026/01/19'),
  },
  {
    name: 'MLK Day 2027',
    date: new Date('2027/01/18'),
  },
  {
    name: 'MLK Day 2028',
    date: new Date('2028/01/17'),
  },
  {
    name: 'MLK Day 2029',
    date: new Date('2029/01/15'),
  },
  {
    name: 'MLK Day 2030',
    date: new Date('2030/01/21'),
  },
  {
    name: 'Presidents Day 2019',
    date: new Date('2019/02/18'),
  },
  {
    name: 'Presidents Day 2020',
    date: new Date('2020/02/17'),
  },
  {
    name: 'Presidents Day 2021',
    date: new Date('2021/02/15'),
  },
  {
    name: 'Presidents Day 2022',
    date: new Date('2022/02/21'),
  },
  {
    name: 'Presidents Day 2023',
    date: new Date('2023/02/20'),
  },
  {
    name: 'Presidents Day 2024',
    date: new Date('2024/02/19'),
  },
  {
    name: 'Presidents Day 2025',
    date: new Date('2025/02/17'),
  },
  {
    name: 'Presidents Day 2026',
    date: new Date('2026/02/16'),
  },
  {
    name: 'Presidents Day 2027',
    date: new Date('2027/02/15'),
  },
  {
    name: 'Presidents Day 2028',
    date: new Date('2028/02/21'),
  },
  {
    name: 'Presidents Day 2029',
    date: new Date('2029/02/19'),
  },
  {
    name: 'Presidents Day 2030',
    date: new Date('2030/02/18'),
  },
  {
    name: 'Memorial Day 2019',
    date: new Date('2019/05/27'),
  },
  {
    name: 'Memorial Day 2020',
    date: new Date('2020/05/25'),
  },
  {
    name: 'Memorial Day 2021',
    date: new Date('2021/05/31'),
  },
  {
    name: 'Memorial Day 2022',
    date: new Date('2022/05/30'),
  },
  {
    name: 'Memorial Day 2023',
    date: new Date('2023/05/29'),
  },
  {
    name: 'Memorial Day 2024',
    date: new Date('2024/05/27'),
  },
  {
    name: 'Memorial Day 2025',
    date: new Date('2025/05/26'),
  },
  {
    name: 'Memorial Day 2026',
    date: new Date('2026/05/25'),
  },
  {
    name: 'Memorial Day 2027',
    date: new Date('2027/05/31'),
  },
  {
    name: 'Memorial Day 2028',
    date: new Date('2028/05/29'),
  },
  {
    name: 'Memorial Day 2029',
    date: new Date('2029/05/28'),
  },
  {
    name: 'Memorial Day 2030',
    date: new Date('2030/05/27'),
  },
  {
    name: 'Labor Day 2018',
    date: new Date('2018/09/03'),
  },
  {
    name: 'Labor Day 2019',
    date: new Date('2019/09/02'),
  },
  {
    name: 'Labor Day 2020',
    date: new Date('2020/09/07'),
  },
  {
    name: 'Labor Day 2021',
    date: new Date('2021/09/06'),
  },
  {
    name: 'Labor Day 2022',
    date: new Date('2022/09/05'),
  },
  {
    name: 'Labor Day 2023',
    date: new Date('2023/09/04'),
  },
  {
    name: 'Labor Day 2024',
    date: new Date('2024/09/02'),
  },
  {
    name: 'Labor Day 2025',
    date: new Date('2025/09/01'),
  },
  {
    name: 'Labor Day 2026',
    date: new Date('2026/09/07'),
  },
  {
    name: 'Labor Day 2027',
    date: new Date('2027/09/06'),
  },
  {
    name: 'Labor Day 2028',
    date: new Date('2028/09/04'),
  },
  {
    name: 'Labor Day 2029',
    date: new Date('2029/09/03'),
  },
  {
    name: 'Labor Day 2030',
    date: new Date('2030/09/03'),
  },
  {
    name: 'Colubmus Day 2018',
    date: new Date('2018/10/08'),
  },
  {
    name: 'Colubmus Day 2019',
    date: new Date('2019/10/14'),
  },
  {
    name: 'Colubmus Day 2020',
    date: new Date('2020/10/12'),
  },
  {
    name: 'Colubmus Day 2021',
    date: new Date('2021/10/11'),
  },
  {
    name: 'Colubmus Day 2022',
    date: new Date('2022/10/10'),
  },
  {
    name: 'Colubmus Day 2023',
    date: new Date('2023/10/09'),
  },
  {
    name: 'Colubmus Day 2024',
    date: new Date('2024/10/14'),
  },
  {
    name: 'Colubmus Day 2025',
    date: new Date('2025/10/13'),
  },
  {
    name: 'Colubmus Day 2026',
    date: new Date('2026/10/12'),
  },
  {
    name: 'Colubmus Day 2027',
    date: new Date('2027/10/11'),
  },
  {
    name: 'Colubmus Day 2028',
    date: new Date('2028/10/09'),
  },
  {
    name: 'Colubmus Day 2029',
    date: new Date('2029/10/08'),
  },
  {
    name: 'Colubmus Day 2030',
    date: new Date('2030/10/14'),
  },
  {
    name: 'Thanksgiving Day 2018',
    date: new Date('2018/11/22'),
  },
  {
    name: 'Thanksgiving Day 2019',
    date: new Date('2019/11/28'),
  },
  {
    name: 'Thanksgiving Day 2020',
    date: new Date('2020/11/26'),
  },
  {
    name: 'Thanksgiving Day 2021',
    date: new Date('2021/11/25'),
  },
  {
    name: 'Thanksgiving Day 2022',
    date: new Date('2022/11/24'),
  },
  {
    name: 'Thanksgiving Day 2023',
    date: new Date('2023/11/23'),
  },
  {
    name: 'Thanksgiving Day 2024',
    date: new Date('2024/11/28'),
  },
  {
    name: 'Thanksgiving Day 2025',
    date: new Date('2025/11/27'),
  },
  {
    name: 'Thanksgiving Day 2026',
    date: new Date('2026/11/26'),
  },
  {
    name: 'Thanksgiving Day 2027',
    date: new Date('2027/11/25'),
  },
  {
    name: 'Thanksgiving Day 2028',
    date: new Date('2028/11/23'),
  },
  {
    name: 'Thanksgiving Day 2029',
    date: new Date('2029/11/22'),
  },
  {
    name: 'Thanksgiving Day 2030',
    date: new Date('2030/11/28'),
  },
];

export default holidays;
