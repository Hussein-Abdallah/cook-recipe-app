interface Props {
  id: number;
  activeTab: number;
  children: JSX.Element;
}
export function TabContent({ id, activeTab, children }: Props) {
  return activeTab === id ? children : null;
}
