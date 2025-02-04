import { ResponsiveRadialBar } from '@nivo/radial-bar'
import { data } from '../../data/data';
const MyResponsiveRadialBar = () => (
    <ResponsiveRadialBar
        data={data}
        valueFormat=" >-.2f"
        startAngle={-90}
        endAngle={180}
        innerRadius={0.6}
        padding={0.25}
        margin={{ top: 40, right: 120, bottom: 40, left: 40 }}
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
        // legends={[
        //     {
        //         anchor: 'bottom',
        //         direction: 'column',
        //         justify: false,
        //         translateX: -130,
        //         translateY: 74,
        //         itemsSpacing: 9,
        //         itemDirection: 'left-to-right',
        //         itemWidth: 10,
        //         itemHeight: 18,
        //         itemTextColor: '#999',
        //         symbolSize: 7,
        //         symbolShape: 'square',
        //         effects: [
        //             {
        //                 on: 'hover',
        //                 style: {
        //                     itemTextColor: '#000'
        //                 }
        //             }
        //         ]
        //     }
        // ]}
    />
)

export default MyResponsiveRadialBar;