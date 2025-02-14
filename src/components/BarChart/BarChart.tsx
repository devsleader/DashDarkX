import { ResponsiveBar } from '@nivo/bar'
import { barData } from '../../data/data'

const MyResponsiveBar = () => (
    <ResponsiveBar
        data={barData}
        keys={[
            'Current clients',
            'Subscribers',
            'New customers'
        ]}
        indexBy="month"
        margin={{ top: 20, right: 0, bottom: 50, left: 20 }}
        padding={0.88}
        valueScale={{ type: 'linear' }}
        indexScale={{ type: 'band', round: false }}
        colors={["#00c2ff", "#0f43fb", "#cc3cfe"]}
        defs={[
            {
                id: 'dots',
                type: 'patternDots',
                background: 'inherit',
                color: '#ffffff',
                size: 4,
                padding: 1,
                stagger: true
            },
            {
                id: 'lines',
                type: 'patternLines',
                background: 'inherit',
                color: '#ffffff',
                rotation: -45,
                lineWidth: 6,
                spacing: 10
            }
        ]}
        borderColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    1.6
                ]
            ]
        }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
            tickSize: 0,
            tickPadding: 17,
            tickRotation: 0,
        }}
        axisLeft={{
            tickSize: 0,
            tickPadding: 8,
            tickRotation: 0,
        }}
        enableGridY={false}
        enableLabel={false}
        labelSkipWidth={9}
        labelSkipHeight={12}
        labelTextColor={{
            from: 'color',
        }}
        theme={{
            axis: {
                ticks: {
                    text: {
                        fill: '#ffffff',  // Set white color for axis labels
                    },
                },
            },
        }}
        motionConfig="gentle"
        role="application"
        ariaLabel="Nivo bar chart demo"
        barAriaLabel={e => e.id + ": " + e.formattedValue + " in month: " + e.indexValue}
    />
)

export default MyResponsiveBar;
