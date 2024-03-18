class SortableArray {
  array = []

  constructor(array) {
    this.array = array
  }

  partition(leftPointer, rightPointer) {
    let pivotIndex = rightPointer

    let pivot = this.array[pivotIndex]

    rightPointer -= 1

    while (true) {
      while (this.array[leftPointer] < pivot) {
        leftPointer += leftPointer
      }

      while (this.array[rightPointer] > pivot) {
        rightPointer -= 1
      }

      if (leftPointer >= rightPointer) {
        break
      } else {
        let tempLeftPointerValue = this.array[leftPointer]

        this.array[leftPointer] = this.array[rightPointer]
        this.array[rightPointer] = tempLeftPointerValue

        leftPointer += 1
      }
    }

    let tempLeftPointerValue = this.array[leftPointer]

    this.array[leftPointer] = this.array[pivotIndex]
    this.array[pivotIndex] = tempLeftPointerValue

    return leftPointer
  }

  quicksort(leftIndex, rightIndex) {
    if (rightIndex - leftIndex <= 0) {
      return
    }

    let pivotIndex = this.partition(leftIndex, rightIndex)

    this.quicksort(leftIndex, pivotIndex - 1)

    this.quicksort(pivotIndex + 1, rightIndex)
  }

  quickselect(kthLowestValue, leftIndex, rightIndex) {
    if (rightIndex - leftIndex <= 0) {
      return this.array[leftIndex]
    }

    let pivotIndex = this.partition(leftIndex, rightIndex)

    if (kthLowestValue < pivotIndex) {
      this.quickselect(kthLowestValue, leftIndex, pivotIndex - 1)
    } else if (kthLowestValue > pivotIndex) {
      this.quickselect(kthLowestValue, pivotIndex + 1, rightIndex)
    } else {
      return this.array[pivotIndex]
    }
  }
}