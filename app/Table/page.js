import Back from "@/components/UI/Back"
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import TableData from "@/data/tableData"


const page = () => {
    return (
        <section className="flex justify-center mt-6 flex-col items-center px-2 pb-10">
            <h2 className="text-xl border-b border-gray-300 mb-6">Table Components⚡</h2>
            <Back/>
            <Table className=" w-10/12 lg:w-6/12 mx-auto">
                <TableCaption>A list of your recent invoices.</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[100px]">Day</TableHead>
                        <TableHead>Invested Amount</TableHead>
                        <TableHead>Profit</TableHead>
                        <TableHead className="text-right">Date</TableHead>
                    </TableRow>
                </TableHeader>
                {
                    TableData.map((table, index) => (
                        <TableBody>
                            <TableRow>
                                <TableCell className="font-medium">{table.day}</TableCell>
                                <TableCell>{table.investedAmount}</TableCell>
                                <TableCell>{table.profit}</TableCell>
                                <TableCell className="text-right">{table.date}</TableCell>
                            </TableRow>
                        </TableBody>
                    ))
                }
            </Table>
        </section>
    )
}

export default page