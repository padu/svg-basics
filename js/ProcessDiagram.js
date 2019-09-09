let d3 = window.d3;

export default class processDiagram {
    allPTags;
    constructor() {}

    init() {
        let svg = d3.select('body')
                .append('svg')
                .attr('width',500)
                .attr('height',300);

        let lolli = svg.append('g')
                    .attr('transform','translate(100,100)');
            lolli.append('line')
                .attr('x2', 200)
                .style('stroke','black');

            lolli.append('circle')
                .attr('cx', 200)
                .attr('r', 10);

            lolli.append('text')
                .attr('y',-10)
                .text('Lolli');
    }
}