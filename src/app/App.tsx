import { Footer } from '@/shared/components/footer/Footer';
import { Header } from '@/shared/components/header/Header';

import { DownloadJSON, LoadJSON } from '@/modules/json';
import { TabContent, TabList } from '@/modules/tabs';
import { Tree } from '@/modules/tree';

export const App = () => {
  return (
    <>
      <Header />
      <main>
        <div className='flex gap-3 mt-2 mx-10'>
          <Tree />
          <div className='flex flex-col flex-grow'>
            <TabList />
            <TabContent />
          </div>
        </div>
        <div className='flex gap-3 mt-20 px-10 items-center justify-end'>
          <DownloadJSON />
          <LoadJSON />
        </div>
      </main>
      <Footer />
    </>
  );
};
