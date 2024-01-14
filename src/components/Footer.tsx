import linkedIn from '@/assets/linkedin_icon.svg';
import mailbox from '@/assets/mailbox_icon.svg';

const iconsClassName =
  'block w-6 h-6 rounded transition-transform duration-300 hover:-translate-y-1';

export default function Footer() {
  return (
    <footer className="flex justify-between max-w-screen-md mx-auto mt-6 px-4 py-8">
      <p className="text-sm text-gray-600">@Copyright - Efdal YALÇIN</p>
      <div className="flex gap-6">
        <a href="mailto:yalcinefdal@gmail.com" className={iconsClassName}>
          <img src={mailbox} alt="mailbox" />
        </a>
        <a
          href="https://www.linkedin.com/in/efdal-yalcin/"
          target="blank"
          className={iconsClassName}
        >
          <img src={linkedIn} alt="linkedIn" />
        </a>
      </div>
    </footer>
  );
}
