export interface IIcon extends React.ComponentProps<"svg"> {
  className?: string;
}
export interface IRemainingTime {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}
