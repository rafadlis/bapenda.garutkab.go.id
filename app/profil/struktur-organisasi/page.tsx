"use client";
import { ReactFlow, Background, Controls } from "@xyflow/react";
import "@xyflow/react/dist/style.css";
export default function StrukturOrganisasi() {
    const nodes = [
        {
            id: "kepala",
            position: { x: 400, y: 0 },
            data: { label: "KEPALA BADAN" },
            type: "default",
        },
        {
            id: "sekretariat",
            position: { x: 400, y: 100 },
            data: { label: "SEKRETARIAT" },
        },
        {
            id: "pendataan",
            position: { x: 150, y: 250 },
            data: { label: "Bidang Pendataan" },
        },
        {
            id: "penagihan",
            position: { x: 400, y: 250 },
            data: { label: "Bidang Penagihan" },
        },
        {
            id: "pengawasan",
            position: { x: 650, y: 250 },
            data: { label: "Bidang Pengawasan dan Pemeriksaan" },
        },
    ];

    const edges = [
        {
            id: "e1",
            source: "kepala",
            target: "sekretariat",
            style: { stroke: "#000", strokeWidth: 2 },
        },
        {
            id: "e2",
            source: "kepala",
            target: "pendataan",
            style: { stroke: "#000", strokeWidth: 2 },
        },
    ];

    return (
        <>
            <div className="h-[80vh] w-full">
                <ReactFlow nodes={nodes} edges={edges} fitView>
                    <Controls />
                </ReactFlow>
            </div>
        </>
    );
}
