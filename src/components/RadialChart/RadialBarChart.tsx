import { ResponsiveRadialBar } from '@nivo/radial-bar'
import { data } from '../../data/data';
const MyResponsiveRadialBar = () => (
    <ResponsiveRadialBar
        data={data}
        valueFormat=" >-.2f"
        startAngle={-90}
        endAngle={180}
        innerRadius={0.7}
        padding={0.38}
        margin={{ top: 0, right: 40, bottom: 0, left: 40 }}
        colors={["#00c2ff", "#0f43fb", "#cc3cfe"]}
        borderColor={{
            from: 'color',
            modifiers: [['darker', 1.6]]
        }}
        enableTracks={false}
        enableRadialGrid={false}
        enableCircularGrid={false}
        radialAxisStart={null}
        circularAxisOuter={null}
        labelsSkipAngle={17}
        labelsRadiusOffset={0.55}
        labelsTextColor={{ from: 'color', modifiers: [] }}
    />
)

export default MyResponsiveRadialBar;