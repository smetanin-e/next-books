/**
 * 
 */

//TODO Нужно сделать этот код правильнее
interface Props {
   
        ONE: number,
        TWO: number,
        THREE: number,
        FOUR: number,
        FIVE: number,
   
}

export const totalRating = (obj:Props) => {
    const totalCount = obj.ONE + obj.TWO + obj.THREE + obj.FOUR + obj.FIVE;
    const totalValue = totalCount != 0 ? Number(
          (
            (obj.ONE * 1 +
              obj.TWO * 2 +
              obj.THREE * 3 +
              obj.FOUR * 4 +
              obj.FIVE * 5) /
            totalCount
          ).toFixed(1)) : 0
    return {totalCount,totalValue}
}