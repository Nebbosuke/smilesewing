import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import EmailIcon from "@mui/icons-material/Email";
import PlaceIcon from "@mui/icons-material/Place";
import FacebookIcon from "@mui/icons-material/Facebook";
import { Link } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import ReturnTop from "./ReturnTop";

const Contact = () => {
  return (
    <>
      <div className="container flex mx-auto flex-col px-5 py-10 ">
        <div className="flex items-center md:justify-end justify-center pb-3">
          <div className=" text-lg">
            <ReturnTop />
          </div>
        </div>
        <div className="flex flex-col md:text-5xl text-2xl py-3 gap-1 items-center text-white">
          <p>お問い合わせ</p>
          <div className="flex flex-row mb-4">
            <p className="ml-1 pb-1 md:text-3xl text-xl text-yellow-200">
              お気軽にご連絡ください
            </p>
          </div>
        </div>

        <div className="flex flex-col md:text-3xl text-xl mb-12 pt-3 text-white items-center">
          <div className="flex flex-row mb-4">
            <div className="text-yellow-300">
              <PhoneAndroidIcon fontSize="inherit" />
            </div>

            <p className="ml-1 pb-1">090-4618-1997</p>
          </div>
          <div className="flex flex-row mb-4">
            <div className="text-yellow-300">
              <EmailIcon fontSize="inherit" />
            </div>

            <p className="ml-1">morikawaemi5290@yahoo.co.jp</p>
          </div>
          <div className="flex flex-row">
            <div className="text-yellow-300">
              <PlaceIcon fontSize="inherit" />
            </div>

            <div>
              <p className="ml-1">千葉県東金市福俵476</p>
              <p className="ml-1">アルソアビル２F</p>
              <p className="md:text-xl text-base ml-1">
                （JR東金線福俵駅より徒歩10分）
              </p>
            </div>
          </div>
        </div>
        <div className="text-xl flex flex-row items-center justify-center">
          <div className="mr-6">
            <Link
              href="https://www.facebook.com/people/%E6%A3%AE%E5%B7%9D-%E7%B5%B5%E7%BE%8E/pfbid022pxqsfhYGX32d3oLrU7qrkbWX7T9SMijmu9qH6nLH35Txs1YqQTeR8J7dR7nMV6hl/"
              underline="none"
            >
              <FacebookIcon fontSize="large" />
            </Link>
          </div>
          <div className="mr-6">
            <Link
              href="https://www.instagram.com/emimorikawa1997/"
              underline="none"
            >
              <InstagramIcon fontSize="large" />
            </Link>
          </div>
          <div className="pt-1">
            <Link href="https://blog.goo.ne.jp/atorie1997" underline="none">
              {/* <OpenInNewIcon fontSize="large" /> */}
              ブログ
            </Link>
          </div>
        </div>
        <div></div>
      </div>
    </>
  );
};
export default Contact;
