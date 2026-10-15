import mark from '../../assets/edabip-mark.png';

export default function LogoMark({ className = '' }) {
  return <img src={mark} alt="" className={`object-contain ${className}`} />;
}
