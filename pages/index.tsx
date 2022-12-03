import { Fragment, useEffect, useState } from 'react';
import { NextPage } from 'next';
import { Menu, Transition } from '@headlessui/react';
import { ChevronUpDownIcon } from '@heroicons/react/20/solid';
import { getGraphData } from '../redux/slices/getGraphSlice';
import { useDispatch, useSelector } from 'react-redux';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Home: NextPage = () => {
  const { getGraphList } = useSelector((store: any) => store.getGraph);
  const [selectedGraphData, setSelectedGraphData] = useState<any>([]);
  const [selectedName, setSelectedName] = useState();
  const dispatch = useDispatch<any>();
  
  useEffect(() => {
    dispatch(getGraphData());
  }, [dispatch]);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Wask',
      },
    },
  };

  const labels = [
   1,2,3
  ];

  let spendData:any = [];
  let clicksData:any = [];
  let impressionsData:any = [];

  selectedGraphData.map((select:any) => {
    spendData.push(select.spend);
    clicksData.push(select.clicks);
    impressionsData.push(select.impressions);
  
  })

  
  const data = {
    labels,
    datasets: [
      {
        label: 'Spend',
        data: spendData,
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Clicks',
        data: clicksData,
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
      {
        label: 'Impressions',
        data: impressionsData,
        borderColor: 'rgb(10, 162, 22)',
        backgroundColor: 'rgba(10, 162, 22, 0.5)',
      },
    ],
  };

  return (
    <>
      <main className="container">
        <div className="mt-10 ml-auto w-72">
          <Menu as="div" className="relative">
            <div>
              <Menu.Button className="cursor-pointer text-grey hover:text-primary hover:bg-white placeHolder-grey rounded-lg relative w-full pl-3 justify-between pr-4 py-2.5 bg-blue300 inline-flex items-center border-[2px] border-blue100 hover:border-blue200 input-active focus:ring-transparent focus:color-primary filled:border-none">
                {selectedName ? selectedName : 'Please choose'}
                <ChevronUpDownIcon
                  className="-mr-1 ml-2 h-5 w-5"
                  aria-hidden="true"
                />
              </Menu.Button>
            </div>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="bg-white shadow-deep2 rounded-md w-full p-2 absolute top-[60px] z-50 shadow-xl">
                <div className="overflow-auto max-h-40 scroll_bar secondary_bar py-1 z-50">
                  {getGraphList?.map((item: any, index: any) => (
                    <Menu.Item key={index}>
                      <div
                        className="p-3 mr-2 text-xs hover:bg-purpleLight cursor-pointer text-grey5 z-50"
                        onClick={() => {
                          setSelectedName(item.name);
                          setSelectedGraphData(item.insights.data);
                        }}
                      >
                        {item.name}
                      </div>
                    </Menu.Item>
                  ))}
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>

        <Line options={options} data={data} />
      </main>
    </>
  );
};

export default Home;
