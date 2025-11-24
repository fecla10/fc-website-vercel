"use client"

import * as React from "react"
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import { motion } from "framer-motion"

// Revenue Growth Chart Data
const revenueData = [
  { period: "2022-Q1", revenue: 0, target: 0 },
  { period: "2022-Q2", revenue: 250, target: 200 },
  { period: "2022-Q3", revenue: 450, target: 400 },
  { period: "2022-Q4", revenue: 650, target: 600 },
  { period: "2023-Q1", revenue: 800, target: 750 },
  { period: "2023-Q2", revenue: 950, target: 900 },
  { period: "2023-Q3", revenue: 1100, target: 1050 },
  { period: "2023-Q4", revenue: 1200, target: 1150 },
  { period: "2024-Q1", revenue: 1000, target: 950 },
]

const revenueConfig = {
  revenue: {
    label: "Revenue Generated",
    color: "hsl(173, 58%, 39%)",
  },
  target: {
    label: "Target",
    color: "hsl(220, 70%, 50%)",
  },
} satisfies ChartConfig

// Processing Time Reduction Chart Data
const processingData = [
  { month: "Jan", before: 120, after: 4 },
  { month: "Feb", before: 120, after: 3 },
  { month: "Mar", before: 120, after: 2 },
  { month: "Apr", before: 120, after: 2 },
  { month: "May", before: 120, after: 2 },
  { month: "Jun", before: 120, after: 2 },
]

const processingConfig = {
  before: {
    label: "Before Automation",
    color: "hsl(0, 84%, 60%)",
  },
  after: {
    label: "After Automation",
    color: "hsl(173, 58%, 39%)",
  },
} satisfies ChartConfig

// Cost Savings Chart Data
const costSavingsData = [
  { period: "2024-Q1", savings: 0, baseline: 0 },
  { period: "2024-Q2", savings: 15, baseline: 0 },
  { period: "2024-Q3", savings: 22, baseline: 0 },
  { period: "2024-Q4", savings: 26, baseline: 0 },
]

const costSavingsConfig = {
  savings: {
    label: "Cost Savings %",
    color: "hsl(173, 58%, 39%)",
  },
  baseline: {
    label: "Baseline",
    color: "hsl(220, 70%, 50%)",
  },
} satisfies ChartConfig

export function RevenueGrowthChart() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, rotateX: -15 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      whileHover={{ 
        scale: 1.03, 
        rotateY: 3,
        transition: { duration: 0.3 }
      }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="relative overflow-hidden group cursor-pointer"
      style={{ perspective: '1000px' }}
    >
      {/* Animated background gradient */}
      <motion.div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"
        style={{
          background: 'linear-gradient(135deg, rgba(6, 182, 212, 0.15) 0%, rgba(37, 99, 235, 0.1) 50%, rgba(139, 92, 246, 0.08) 100%)',
        }}
        animate={{
          backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'linear'
        }}
      />
      
      {/* Shimmer effect */}
      <motion.div
        className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 -z-10"
        style={{
          background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent)',
        }}
      />

      <Card className="startup-card border-cyan-500/20 relative z-10">
        <CardHeader className="space-y-0 border-b border-white/10 py-5">
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <CardTitle className="text-white">Revenue Growth</CardTitle>
            <CardDescription className="text-gray-400">
              Generated $1M+ revenue through strategic market expansion
            </CardDescription>
          </motion.div>
        </CardHeader>
        <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
          <ChartContainer config={revenueConfig} className="aspect-auto h-[250px] w-full">
            <AreaChart data={revenueData}>
              <defs>
                <linearGradient id="fillRevenue" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="hsl(173, 58%, 39%)" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="hsl(173, 58%, 39%)" stopOpacity={0.1} />
                </linearGradient>
                <linearGradient id="fillTarget" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="hsl(220, 70%, 50%)" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="hsl(220, 70%, 50%)" stopOpacity={0.05} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255, 255, 255, 0.1)" vertical={false} />
              <XAxis
                dataKey="period"
                tickLine={false}
                axisLine={false}
                tickMargin={8}
                tick={{ fill: "rgba(255, 255, 255, 0.6)", fontSize: 12 }}
              />
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent indicator="dot" />}
              />
              <Area
                dataKey="revenue"
                type="natural"
                fill="url(#fillRevenue)"
                stroke="hsl(173, 58%, 39%)"
                stackId="a"
              />
              <Area
                dataKey="target"
                type="natural"
                fill="url(#fillTarget)"
                stroke="hsl(220, 70%, 50%)"
                stackId="a"
              />
            </AreaChart>
          </ChartContainer>
        </CardContent>
      </Card>
    </motion.div>
  )
}

export function ProcessingTimeChart() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, rotateX: -15 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      whileHover={{ 
        scale: 1.03, 
        rotateY: -3,
        transition: { duration: 0.3 }
      }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="relative overflow-hidden group cursor-pointer"
      style={{ perspective: '1000px' }}
    >
      {/* Animated background gradient */}
      <motion.div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"
        style={{
          background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.15) 0%, rgba(236, 72, 153, 0.1) 50%, rgba(6, 182, 212, 0.08) 100%)',
        }}
        animate={{
          backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'linear'
        }}
      />
      
      {/* Shimmer effect */}
      <motion.div
        className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 -z-10"
        style={{
          background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent)',
        }}
      />

      <Card className="startup-card border-cyan-500/20 relative z-10">
        <CardHeader className="space-y-0 border-b border-white/10 py-5">
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <CardTitle className="text-white">Processing Time Reduction</CardTitle>
            <CardDescription className="text-gray-400">
              Reduced processing time by 97% (120 min → 2 min) through automation
            </CardDescription>
          </motion.div>
        </CardHeader>
        <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
          <ChartContainer config={processingConfig} className="aspect-auto h-[250px] w-full">
            <AreaChart data={processingData}>
              <defs>
                <linearGradient id="fillBefore" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="hsl(0, 84%, 60%)" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="hsl(0, 84%, 60%)" stopOpacity={0.1} />
                </linearGradient>
                <linearGradient id="fillAfter" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="hsl(173, 58%, 39%)" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="hsl(173, 58%, 39%)" stopOpacity={0.1} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255, 255, 255, 0.1)" vertical={false} />
              <XAxis
                dataKey="month"
                tickLine={false}
                axisLine={false}
                tickMargin={8}
                tick={{ fill: "rgba(255, 255, 255, 0.6)", fontSize: 12 }}
              />
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent indicator="dot" />}
              />
              <Area
                dataKey="before"
                type="natural"
                fill="url(#fillBefore)"
                stroke="hsl(0, 84%, 60%)"
                stackId="a"
              />
              <Area
                dataKey="after"
                type="natural"
                fill="url(#fillAfter)"
                stroke="hsl(173, 58%, 39%)"
                stackId="a"
              />
            </AreaChart>
          </ChartContainer>
        </CardContent>
      </Card>

      {/* Pulsing rings */}
      {[...Array(2)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute inset-0 border-2 border-blue-400 rounded-lg -z-10"
          style={{
            borderColor: `rgba(59, 130, 246, ${0.2 - i * 0.1})`,
          }}
          animate={{
            scale: [1, 1.05, 1],
            opacity: [0.2, 0, 0.2],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            delay: i * 0.5,
            ease: 'easeInOut'
          }}
        />
      ))}
    </motion.div>
  )
}

export function CostSavingsChart() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, rotateX: -15 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      whileHover={{ 
        scale: 1.03, 
        rotateY: 3,
        transition: { duration: 0.3 }
      }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="relative overflow-hidden group cursor-pointer"
      style={{ perspective: '1000px' }}
    >
      {/* Animated background gradient */}
      <motion.div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"
        style={{
          background: 'linear-gradient(135deg, rgba(6, 182, 212, 0.15) 0%, rgba(59, 130, 246, 0.1) 50%, rgba(14, 165, 233, 0.08) 100%)',
        }}
        animate={{
          backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'linear'
        }}
      />
      
      {/* Shimmer effect */}
      <motion.div
        className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 -z-10"
        style={{
          background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent)',
        }}
      />

      <Card className="startup-card border-cyan-500/20 relative z-10">
        <CardHeader className="space-y-0 border-b border-white/10 py-5">
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <CardTitle className="text-white">Cost Savings Achievement</CardTitle>
            <CardDescription className="text-gray-400">
              Negotiated 26% cost savings with premium manufacturers
            </CardDescription>
          </motion.div>
        </CardHeader>
        <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
          <ChartContainer config={costSavingsConfig} className="aspect-auto h-[250px] w-full">
            <AreaChart data={costSavingsData}>
              <defs>
                <linearGradient id="fillSavings" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="hsl(173, 58%, 39%)" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="hsl(173, 58%, 39%)" stopOpacity={0.1} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255, 255, 255, 0.1)" vertical={false} />
              <XAxis
                dataKey="period"
                tickLine={false}
                axisLine={false}
                tickMargin={8}
                tick={{ fill: "rgba(255, 255, 255, 0.6)", fontSize: 12 }}
              />
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent indicator="dot" />}
              />
              <Area
                dataKey="savings"
                type="natural"
                fill="url(#fillSavings)"
                stroke="hsl(173, 58%, 39%)"
                stackId="a"
              />
            </AreaChart>
          </ChartContainer>
        </CardContent>
      </Card>
    </motion.div>
  )
}

