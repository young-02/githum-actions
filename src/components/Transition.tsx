import * as m from "motion/react-m";

export default function Transition({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <m.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -100 }}
    >
      {children}
    </m.div>
  );
}
