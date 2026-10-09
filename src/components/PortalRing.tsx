type Props = {
  children: React.ReactNode;
};

export default function PortalRing({ size = 460 }: { size?: number }) {
  return (
    <div className="portal-ring-wrap" style={{ width: size, height: size }} aria-hidden="true">
      <div className="portal-ring portal-ring-outer" />
      <div className="portal-ring portal-ring-inner" />
      <div className="portal-core" />
    </div>
  );
}
