import { Composition } from 'remotion';
import { DemoChart } from './DemoChart';

export const RemotionVideo: React.FC = () => {
	return (
		<>
			<Composition
				id="Chart"
				component={DemoChart}
				durationInFrames={30 * 10}
				fps={30}
				width={1920}
				height={1080}
			/>
		</>
	);
};
