import Criteria from "../components/criteria";
import Faq from "../components/faq";
import HomePage from "../components/homePage";
// import TimeLine from "../components/timeline";
import Overview from "../components/overview";
import Rules from "../components/rules";

export default function LandingPage() {
  return (
    <>
      <HomePage />
      <Overview />
      <Rules />
      <Criteria />
      {<Faq />}
      {/* <TimeLine /> */}
    </>
  )
}
