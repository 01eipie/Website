import { FC } from 'react';
import ApplicationBar from '../../components/ApplicationBar';
import NavigationDrawer from '../../components/NavigationDrawer';
// import resumePdf from './resume.pdf';

const Resume : FC = () =>
{
  const resume = 
    <div>
      <ApplicationBar />
      <NavigationDrawer />
      {/* <iframe src={resumePdf} style={{position: "absolute"}} width="100%" height="100%" title="Resume"/> */}
    </div>
  return resume;
}

export default Resume;
